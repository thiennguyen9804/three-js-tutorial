import { clsx } from "clsx";
import { Link } from "expo-router";
import React, { useState } from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import { navLinks } from "../constants";
import { customStyles } from "../utils/style";

const NavItems = () => {
	return (
		<View className="flex sm:flex-col items-center gap-4 flex-row md:gap-6 relative z-20">
			{navLinks.map(({id, href, name}) => (
				<View key={id} className={clsx(customStyles["nav-li"])}>
					<Link href={href as any} className={clsx(customStyles["nav-li_a"])}>
						{name}
					</Link>
				</View>
			))}
		</View>
	)
}

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);
	const toggleMenu = () => setIsOpen((prevState) => !prevState);

	return (
		<View className="w-full fixed top-0 left-0 right-0 z-50 bg-black/90">
			<View className="w-full max-w-7xl mx-auto">
				<View
					className={clsx("w-full flex flex-1 flex-row justify-between items-center py-5 mx-auto",
						customStyles["c-space"])}
				>
					<Link href="/" className="text-neutral-400 font-bold text-xl hover:text-white transition-colors">Hayashing</Link>
					<TouchableOpacity
						onPress={toggleMenu}
						className="text-neutral-400 hover:text-white focus:outline-none hidden sm:flex sm:flex-row" 
					>
						<Image
							className="w-6 h-6"
							source={isOpen ? require('@images/close.svg') : require('@images/menu.svg')} />
					</TouchableOpacity>

					<View className="sm:hidden flex flex-row">
						<NavItems />
					</View>
				</View>
			</View>
		</View>
	)
}

export default Navbar