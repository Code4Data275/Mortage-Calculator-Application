# Mortage Calculator
  This is a React-Vite Application to calculate their monthly EMIs and plan their mortages out

## Features
- Users can set purchase prices
- Users can set down payment
- Users can set repayment time
- User can set interest rate
- Show users loan amount
- Show users the estimated amount they'll pay on a monthly basis

## Formula for mortage payments
M = P * [r * (1 + r)^n / ((1+r)^n) - 1]
    
- M: the total monthly mortage payment (EMI)
- P: the principle amount (Purchased Price - Down Payment)
- r: monthly interest rate
- n: No. of repayments over the loan's lifetime

## Tech Stack
- React Vite
- Tailwind CSS

## Libraries used 
- React

## Hooks used
- useState
- useEffect

## Setup

### Commands
- npm create vite@latest
- npm install 
- npm install tailwindcss @tailwindcss/vite
- npm run dev
