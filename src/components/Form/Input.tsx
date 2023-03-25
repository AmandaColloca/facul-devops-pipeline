import React, { forwardRef, ForwardRefRenderFunction } from 'react';

import { FieldError } from 'react-hook-form';

import {
	FormControl,
	FormLabel,
	FormErrorMessage,
	Input as ChakraInput,
	InputProps as ChakraInputProps,
} from '@chakra-ui/react';

interface InputProps extends ChakraInputProps {
	name: string;
	label?: string;
	error: FieldError;
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
	{ name, label, error, ...props },
	ref
) => {
	return (
		<FormControl isInvalid={!!error}>
			{!!label && <FormLabel>{label}</FormLabel>}
			<ChakraInput
				name={name}
				id={name}
				focusBorderColor='pink.500'
				bgColor='gray.900'
				variant='filled'
				_hover={{
					bgColor: 'gray.900',
				}}
				size='lg'
				ref={ref}
				{...props}
			/>
			{!!error && <FormErrorMessage>{error.message}</FormErrorMessage>}
		</FormControl>
	);
};

export const Input = forwardRef(InputBase);