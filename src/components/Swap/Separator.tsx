import './Separator.css'
import { motion } from 'framer-motion'
export function Arrow() {
    return <>
        <div className="button-flex-container">
            <span className="divider"></span>
            <motion.a
                whileHover={{ scale: 1.1, rotate: 180 }}
                whileTap={{ scale: 0.9, rotate: 360 }}
                className='arrow-button'>
                <svg xmlns="http://www.w3.org/2000/svg" width="19" height="12" viewBox="0 0 19 12" fill="none">
                    <path d="M0.11586 0.58313L9.3435 8.77015L18.5711 0.58313L9.3435 12.0069L0.11586 0.58313Z" fill="#A6A6A6" />
                </svg>
            </motion.a>
            <span className="divider"></span>
        </div>
    </>
}