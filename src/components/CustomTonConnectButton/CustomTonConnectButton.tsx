import { TonConnectButton } from '@tonconnect/ui-react'
import './CustomTonConnectButton.css'
import { motion } from 'framer-motion'

export function CustomTonConnectButton() {
    return (
        <>
            <motion.a 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                >
                <TonConnectButton/>
            </motion.a>
        </>
    )
}