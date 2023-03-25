import React from 'react';

import { Flex, useBreakpointValue } from '@chakra-ui/react';

import { Logo } from './Logo';
import { SearchInput } from './SearchInput';
import { NotificationsNav } from './NotificationsNav';
import { Profile } from './Profile';
import { MobileMenuButton } from './MobileMenuButton';

export const Header: React.FC = () => {
	const isWide = useBreakpointValue({
		base: false,
		lg: true,
	});

	return (
		<Flex
			as='header'
			w='100%'
			maxW={1480}
			h='20'
			px='6'
			mt='4'
			mx='auto'
			align='center'
		>
			{!isWide && <MobileMenuButton />}
			<Logo />
			{isWide && <SearchInput />}
			<Flex align='center' ml='auto'>
				<NotificationsNav />
				<Profile
					name='Amanda Colloca'
					email='amanda.colloca@gmail.com'
					wide={isWide}
				/>
			</Flex>
		</Flex>
	);
};
