import { FDC_API_KEY, PIXABAY_KEY } from '@env';

export async function fetchNutritionData(foodName: string) {
  try {
    const response = await fetch(
      `https://world.openfoodfacts.org/cgi/search.pl?search_terms=${encodeURIComponent(
        foodName,
      )}&search_simple=1&action=process&json=1`,
    );

    const searchResult = await response.json();

    if (!searchResult.products || searchResult.products.length === 0) {
      throw new Error('No product found for this food.');
    }

    const product = searchResult.products[0]; // Get the first matched product

    // Extract relevant nutrition info

    const nutriments = product.nutriments;

    return {
      productName: product.product_name || foodName,
      brand: product.brands || 'Unknown',
      quantity: product.quantity || 'N/A',
      calories: nutriments['energy-kcal'] || 0,
      carbs: nutriments.carbohydrates || 0,
      sugars: nutriments.sugars || 0,
      fat: nutriments.fat || 0,
      saturatedFat: nutriments['saturated-fat'] || 0,
      protein: nutriments.proteins || 0,
      fiber: nutriments.fiber || 0,
      salt: nutriments.salt || 0,
      servingSize: product.serving_size || 'N/A',
    };
  } catch (error) {
    console.error('🍔 Nutrition Fetch Error:', error);
    return null;
  }
}

export async function getUSDAFoodData(query: string) {
  try {
    // 1. Search for the food in USDA
    const searchRes = await fetch(
      `https://api.nal.usda.gov/fdc/v1/foods/search?query=${encodeURIComponent(
        query,
      )}&pageSize=1&api_key=${FDC_API_KEY}`,
    );
    const searchData = await searchRes.json();

    if (!searchData.foods || searchData.foods.length === 0) {
      throw new Error('No USDA food found.');
    }

    const foodId = searchData.foods[0].fdcId;

    // 2. Get detailed food data
    const detailRes = await fetch(
      `https://api.nal.usda.gov/fdc/v1/food/${foodId}?api_key=${FDC_API_KEY}`,
    );
    const foodDetail = await detailRes.json();

    // 3. Parse nutrients
    const nutrients: {
      [nutrientName: string]: { amount: number; unit: string };
    } = {};

    (foodDetail.foodNutrients || []).forEach((item: any) => {
      if (
        item.nutrient?.name &&
        item.amount != null &&
        item.nutrient.unitName
      ) {
        nutrients[item.nutrient.name] = {
          amount: item.amount,
          unit: item.nutrient.unitName,
        };
      }
    });

    // 4. Get Wikipedia description
    let longDescription = 'No description available';
    try {
      const wikiRes = await fetch(
        `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(
          query,
        )}`,
      );
      const wikiData = await wikiRes.json();
      if (wikiData.extract) {
        longDescription = wikiData.extract;
      }
    } catch (wikiErr) {
      console.warn('Wikipedia fetch failed:', wikiErr);
    }

    // 5. Return structured data
    return {
      name: foodDetail.description,
      servingSize: foodDetail.servingSize ?? 'N/A',
      servingSizeUnit: foodDetail.servingSizeUnit ?? 'N/A',
      ingredients: foodDetail.ingredients ?? 'Not available',
      description: longDescription,
      nutrients,
    };
  } catch (error) {
    console.error('🍎 USDA API error:', error);
    return null;
  }
}

export async function getCartoonImage(foodName: string) {
  const query = `cartoon ${foodName}`;
  const apiKey = PIXABAY_KEY;

  const res = await fetch(
    `https://pixabay.com/api/?key=${apiKey}&q=${encodeURIComponent(
      query,
    )}&image_type=illustration&category=food&safesearch=true`,
  );

  const data = await res.json();
  console.log(data);

  if (data?.hits?.length > 0) {
    // Return the first image URL (you can use webformatURL or previewURL)
    return data.hits[0].webformatURL;
  } else {
    return null;
  }
}
