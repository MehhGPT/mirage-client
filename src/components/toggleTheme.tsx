// components/ThemeToggle.tsx
import { SunIcon, MoonIcon } from 'lucide-react';
import { useEffect, useState } from 'react';

const ThemeToggle = () => {
	const [theme, setTheme] = useState('light');
	const [light, setLight] = useState(true);

	useEffect(() => {
		if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
			document.documentElement.classList.add('dark');
			setTheme('dark');
			setLight(false);
		} else {
			document.documentElement.classList.remove('dark');
			setTheme('light');
			setLight(true);
		}
	}, []);

	const toggleTheme = () => {
		if (theme === 'dark') {
			document.documentElement.classList.remove('dark');
			localStorage.setItem('theme', 'light');
			setTheme('light');
			setLight(true);
		} else {
			document.documentElement.classList.add('dark');
			localStorage.setItem('theme', 'dark');
			setTheme('dark');
			setLight(false);
		}
	};

	return (
		<button onClick={toggleTheme}>
			{
				light ?
					<SunIcon />
					:
					<MoonIcon />
			}
		</button>
	);
};

export default ThemeToggle;