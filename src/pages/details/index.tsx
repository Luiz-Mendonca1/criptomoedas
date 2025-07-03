import { useEffect, useState } from "react";
import { data, Link, useNavigate, useParams } from "react-router";
import type {CoinProps} from '../home'

interface responseData{
    data: CoinProps
}

interface errorData{
    error: string
}

type dataProps = responseData | errorData

export function Detail(){
    const {cripto} = useParams()
    const navigate = useNavigate()

    const [coin, setCoin] = useState<CoinProps>()
    const [loading, setLoading] = useState(true)


    useEffect(()=>{
        async function getCoin() {
            try{
                fetch(`https://rest.coincap.io/v3/assets/${cripto}?apiKey=07e01e6c4f0cd224c991483d335b21a58eb2d1a30093a0836af8ea4364947ad6`)
                .then(response => response.json())
                .then((data)=>{
                    console.log(data)

                    if('error' in data){
                        navigate('/')
                        return
                    }

                    const price = Intl.NumberFormat('en-US', {
                        style: 'currency',
                        currency: 'USD'
                    })

                    const priceCompact = Intl.NumberFormat('en-US', {
                        style: 'currency',
                        currency: 'USD',
                        notation: 'compact'
                    })

                    const resultData = {
                        ...data.data,
                        formatedPrice: price.format(Number(data.data.priceUsd)),
                        formatedMarket: priceCompact.format(Number(data.data.marketCapUsd)),
                        formatedVolume: priceCompact.format(Number(data.data.volumeUsd24Hr))
                    }
                    
                    setCoin(resultData)
                    setLoading(false)
                })
                
            }catch(error){
                console.log(error)
                navigate('/')
            }

        }

        getCoin()
    }, [cripto])
    return(
        <div>
            <h1>Details about cripto {cripto}</h1>
            
        </div>
    )
}
