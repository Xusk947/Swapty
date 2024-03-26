import './Swap.css'
import { SwapContainer } from './SwapContainer'
import { Arrow } from './Separator'

export function Swap() {
    return (
        <div className="swap">
            <h2>Swap</h2>
            {
                SwapContainer('From')
            }
            {
                Arrow()
            }
            {
                SwapContainer('To')
            }
        </div>
    )
}