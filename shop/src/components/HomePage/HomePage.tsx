import AllCars from "./../AllCars/AllCars";
import Choise from "./../Choise/Choise";
import Finding from "./../Finding/Finding";
import Header from "./../Header/Header";
import Type from "./../Type/Type";

const HomePage = () => {
  return (
    <>
      <Header />
      <Type />
      <AllCars />
      <Choise />
      <Finding />
    </>
  );
};

export default HomePage;
