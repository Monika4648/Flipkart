import { Box, Typography,Table,TableBody,TableRow,TableCell, Tab } from '@mui/material'
import React from 'react'
import { LocalOffer } from '@mui/icons-material'

const ProductDetail = () => {
    return (
        <div>
            <Typography>Available Offers</Typography>
            <Box>
                <Typography><LocalOffer/>
                    Combo OfferBuy 3 items save 5%; Buy 4 save 7%; Buy 5+ save 10%See all products T&C
                </Typography>
                <Typography><LocalOffer/>
                Buy this Product and Get Extra ₹500 Off on Two-Wheelers T&C
                </Typography>
                <Typography><LocalOffer/>
                Partner OfferBuy this product and get upto ₹500 off on Flipkart Furniture Know More
                </Typography>
                <Typography><LocalOffer/>
                Combo OfferBuy 2 items save 4%; Buy 3 or more save 5%See all products T&C
                </Typography>
                <Table>
                    <TableBody>
                        <TableRow>
                            <TableCell>
                                Delivery
                            </TableCell>
                            <TableCell>
                                Delivery by 7th january
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
                
            </Box>
        </div>
    )
}

export default ProductDetail