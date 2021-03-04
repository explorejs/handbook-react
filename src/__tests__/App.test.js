import { render, screen } from "@testing-library/react";
import App from "../App";

test("renders learn react link", () => {
  const { getByText } = render(<App />)
  expect(getByText("Handbook.Dev")).toBeTruthy()
});



function doMath(a, b){
  if(typeof a === "string"){
    return Number(a) + b
  }
return a + b
}
test("just a jest test", () => {
  const inputs = [[2,2], [3,3]]
  const results = [4, 6]
  for(let i=0; i < inputs.length; i++){
  
  const [first, second] = inputs[i]
  const result = doMath(first, second)
  
  expect(result).toEqual(results[i])
  }
})

test("errors ", () => {
  
  const inputs = [["2",2], [3,3]]
  const results = [4, 6]
  for(let i=0; i < inputs.length; i++){
  
  const [first, second] = inputs[i]
  const result = doMath(first, second)
  expect(result).toEqual(results[i])
  }
})