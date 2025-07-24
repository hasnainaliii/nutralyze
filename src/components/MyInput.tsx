import { useRef } from 'react';
import { Pressable, StyleSheet, TextInput, View } from 'react-native';
import { colors, dynamicSpacingX } from '../constants/Them';
import { TextInputProps } from 'react-native';

type MyInputProps = TextInputProps & {
  icon?: React.ReactNode;
};

function MyInput(props: MyInputProps) {
  const ref = useRef<TextInput>(null);
  return (
    <Pressable onPress={() => ref.current?.focus()}>
      <View style={[styles.inputWrapper, props.style]}>
        {/* Left Icon */}

        {props.icon && <View style={styles.icon}>{props.icon}</View>}

        {/* Input field */}
        <TextInput
          ref={ref}
          {...props}
          placeholderTextColor={colors.primary40}
          style={[styles.input, props.style]}
        />
      </View>
    </Pressable>
  );
}

export default MyInput;

const styles = StyleSheet.create({
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',

    borderRadius: 20,
    borderColor: colors.primary40,
    borderWidth: 1,
    width: dynamicSpacingX(70),
    paddingHorizontal: dynamicSpacingX(3),
    paddingVertical: dynamicSpacingX(2.9),
  },
  icon: {
    marginRight: dynamicSpacingX(2),

    // backgroundColor: 'red',
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: colors.primary40,
  },
});
