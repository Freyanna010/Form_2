import React from "react";

const MainContainer = ({children, ...props}) => {
<Container container="main" maxWidth="xs" {...props}>{children}</Container>
}

export default MainContainer