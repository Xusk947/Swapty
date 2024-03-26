import { Header } from 'react-aria-components'
import { CustomTonConnectButton } from '../CustomTonConnectButton/CustomTonConnectButton'
import { motion } from 'framer-motion'

import './Header.css'
export function CustomHeader() {
    return (
        <>
            <Header className='header'>
                <motion.a 
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9, rotate: -5 }}
                className='logo'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
                        <circle cx="25" cy="25" r="25" fill="#0098EA" />
                        <path d="M23.4119 11C18.8333 15.7639 12.9115 25.2917 25.8539 25.2917C38.7962 25.2917 31.2465 34.4306 25.8539 39" stroke="white" stroke-width="8" />
                    </svg>
                </motion.a>
                <div className='connect'>
                    <CustomTonConnectButton />
                </div>
            </Header>
        </>
    )
}