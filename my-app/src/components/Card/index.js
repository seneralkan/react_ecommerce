import { Box, Image, Button } from "@chakra-ui/react"

import React from 'react'
import { Link } from "react-router-dom"

function Card() {
    return (
        <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p="3">

            <Link to="#">
                <Image src="http://lorempixel.com/400/200/" alt="Products" loading="lazy"></Image>

                <Box p="6">
                    <Box d="flex" alignItems="baseline">
                        
                    </Box>
                    <Box mt="1" fontWeight="semibold" as="h4" lineHeight="tight">
                        Macbook Pro 2019
                    </Box>
                    <Box>
                        22000 TL
                    </Box>

                    <Button colorScheme="yellow">Add to Basket</Button>
                </Box>
            </Link>

        </Box>
    )
}

export default Card;
