import Card from "./components/Card";
import img1 from "../src/assets/pic-1.png";
import img2 from "../src/assets/pic-2.png";
import img3 from "../src/assets/pic-3.png";
import img4 from "../src/assets/pic-4.png";
import img5 from "../src/assets/pic-5.png";
import img6 from "../src/assets/pic-6.png";
import img7 from "../src/assets/pic-7.png";
import img8 from "../src/assets/pic-8.png";

const App = () => {
const users = [
  { 
    imageUrl: img1,
    fullName: "Ethan Brooks",
    description: "frontend developer building clean ui",
    like: 120,
    comment: 45,
  },
  {
    imageUrl: img2,
    fullName: "Liam Turner",
    description: "ui designer creating modern designs",
    like: 98,
    comment: 30,
  },
  {
    imageUrl: img3,
    fullName: "Noah Reynolds",
    description: "react learner working on basics",
    like: 76,
    comment: 18,
  },
  {
    imageUrl: img4,
    fullName: "Caleb Foster",
    description: "creative developer exploring animations",
    like: 150,
    comment: 60,
  },
  {
    imageUrl: img5,
    fullName: "Ryan Mitchell",
    description: "frontend developer learning react",
    like: 132,
    comment: 41,
  },
  {
    imageUrl: img6,
    fullName: "Adam Peterson",
    description: "junior frontend developer practicing daily",
    like: 64,
    comment: 12,
  },
  {
    imageUrl: img7,
    fullName: "Lucas Bennett",
    description: "react enthusiast building small projects",
    like: 89,
    comment: 22,
  },
  {
    imageUrl: img8,
    fullName: "Jacob Collins",
    description: "ui ux learner focusing on user experience",
    like: 110,
    comment: 35,
  },
];



  return (
    <div className="w-full bg-[#5A5F5C] flex gap-10  justify-center py-10 flex-wrap">
      {users.map(function (elem, idx) {
        return <Card key={idx} user={elem} />;
      })}
    </div>
  );
};

export default App;
  