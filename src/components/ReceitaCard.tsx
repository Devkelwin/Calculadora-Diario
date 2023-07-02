import { Box, Image, Text,IBoxProps } from "native-base";
import React from "react";

type TextProp = IBoxProps & {
  title: string;
};





export function ReceitaArea({ title }: TextProp) {
  return (
    <Box w={"100%"} zIndex={0} h={190} mt={10}>
    
    </Box>
  );
}
