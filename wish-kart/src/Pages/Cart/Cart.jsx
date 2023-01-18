import { Flex, Text, Card, Button, Box, Image } from "@chakra-ui/react";
import React from "react";
import "./cart.css";
import Navbar2 from "../../components/Navbar2/Navbar2.jsx";
import CartDrawer from "./CartDrawer";

const Cart = () => {
  return (
    <>
      <Navbar2 />
      {/* <div className="cart-section"> */}
        <Flex w={'72%'} gap={'10px'} margin={'20px auto'} >
        <div className="cart-first-section">
          <div className="cart-fisrt-section-item">
            <Flex
              marginBottom={"15px"}
              marginLeft={"15px"}
              gap={"10px"}
              fontWeight={"600"}
            >
              <Text>Cart</Text>|<Text>{1}{' '}Item</Text>
            </Flex>
          </div>
          <Card
            direction={{ base: "column", sm: "row" }}
            overflow="hidden"
            variant="outline"
            gap={"15px"}
            borderRadius={"5px 5px 0 0"}
          >
            <Image
              objectFit="cover"
              boxSize="90%"
              w={{ base: "40%", md:"30%", lg: "18%" }}
              padding={"20px"}
              src={
                "https://images.meesho.com/images/products/78591203/akim8_512.jpg"
              }
            />
            <Box>
              <Box
                fontSize={"20px"}
                display="flex"
                alignItems="center"
                justifyContent="space-between"
              
              >
                <Text fontWeight={"600"}>Redmi Go Back cover</Text>
                <Text color={"pink.400"} fontWeight={"600"}>
                  <CartDrawer />
                </Text>
              </Box>
              <Flex gap={"20px"} fontWeight={"500"}>
                <Text>Size: s</Text>
                <Text>Qty: 1</Text>
              </Flex>
              <Text m={"10px auto"} fontWeight={"500"}>
                ₹2023
              </Text>
              <Button
                color={"pink.400"}
                gap={"10px"}
                fontWeight={"600"}
                bg={"none"}
                _hover={{ bg: "none" }}
              >
                <i class="fa-solid fa-xmark"></i>Remove
              </Button>
            </Box>
          </Card>
          <Flex 
          borderRadius={'0 0 5px 5px'}
            borderWidth={"1px"}
            padding={"15px 5px"}
            align={"center"}
            justifyContent={"space-between"}
            fontWeight={"500"}
          >
            <Text>Supplier :</Text>
            <Text>Free Delivery</Text>
          </Flex>
        </div>

        <div className="cart-second-section">
          <Box borderLeft={"2px solid rgb(148, 137, 137)"} padding={"10px"}>
            <Text fontWeight={"600"} fontSize={"20px"}>
              Price Details{" "}
            </Text>
            <Flex
              justifyContent={"space-between"}
              fontWeight={"600"}
              color={"gray"}
              m={"10px auto"}
            >
              <Text>Total Product Price</Text>
              <Text>{"₹"}179</Text>
            </Flex>
            <hr />
            <Flex
              justifyContent={"space-between"}
              fontSize={"17px"}
              fontWeight={"600"}
              m={"10px auto"}
            >
              <Text>Order Total</Text>
              <Text>{"₹"}179</Text>
            </Flex>

            <Button fontSize={"10px"} outline={"none"} padding={{base:'xs',md:'sm',lg:'1px 69px'}}>
              Clicking on ‘Continue’ will not deduct any money
            </Button>

            <br />

            <Button
              bg={"pink.400"}
              padding={{base:'xs',md:'sm',lg:'1px 147px'}}
              color={"white"}
              borderRadius={"5px"}
              m={"10px auto"}
              _hover={{ bg: "pink.450" }}
            >
              Continue
            </Button>
          </Box>
          <Image
            h={"120px"}
            w={"full"}
            src={
              "https://images.meesho.com/images/marketing/1588578650850.webp"
            }
            objectFit={"cover"}
          />
        </div>
        </Flex>
      {/* </div> */}
    </>
  );
};

export default Cart;
