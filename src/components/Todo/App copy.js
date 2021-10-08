// D:\work_google\share\li\react\my-app2>npm -v
// 7.6.3

// App.js
// import css file
import './App.css';
import styled from 'styled-components'

// Creating a style object variable for Inline styling 
const titleStyle = {
	color: 'red',
	fontWeight: 'bold'
}


const TitleWrapper = styled.h2`
  display: flex;
  color: blue;
  
  &:hover {
    color: red;
  }

  span {
    color: yellow;
  }
`

function Title({size}) {
	if (size === 'XL') {
		// Creating a style object variable for Inline styling 
		return <h1 style={titleStyle}>hello</h1>
	}
	else {
		// Inline styling
		// return <h2 style={{
    //    dislay: 'flex';
    //   color: 'blue',
    // }}>hello</h2>
    return (
      <TitleWrapper>hello <span>yo</span> </TitleWrapper>
    )
	}
}

const Description = styled.p`
  color: red;
  padding: 20px;
  border: 1px solid black;
`

// function Description({children}) {
// 	return (
// 		<p>
// 			{children}
// 		</p>
// 	)
// }

function App() {
  const titleSize = 'M';
  return (
		// class 改為 className
		<div className="App">
			{/* add function  */}
			{/* add parameter */}
			<Title size={titleSize}></Title>
			{/* add some data to function, its name is children */}
			<Description>
				This is 1st react.
				welcome to here.
			</Description>
		</div>
  );
}

export default App;
