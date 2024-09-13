import FoodItem from './FoodItem';

export default function FoodList({foodData}) {
  return (
    <div>
      {foodData && foodData.length > 0 ? (
        foodData.map(food => (
          <FoodItem key={food.id} food={food} />
        ))
      ) : (
        <p>No food items available</p>
      )}
    </div>
  );
}
