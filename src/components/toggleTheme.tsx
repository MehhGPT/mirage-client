// components/ThemeToggle.tsx
import { SunIcon, MoonIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useTheme } from '@/hooks/useTheme';
import LightLogo from '@/images/Light.svg';
import DarkLogo from '@/images/Dark.svg';

export const ThemeToggleButton = () => {
	const { theme, toggleTheme } = useTheme();

	return (
		<button onClick={toggleTheme}>
			{theme === 'light' ? <MoonIcon /> : <SunIcon />}
		</button>
	);
};

export const Logo = () => {
	const { theme } = useTheme();

	const logo = theme === 'light' ? LightLogo : DarkLogo;

	return (
			<Image
				src={logo}
				alt="MIRAGE"
				width={150}
				height={100}
			/>
	);
};