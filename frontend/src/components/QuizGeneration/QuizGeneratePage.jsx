import SearchIcon from "@mui/icons-material/Search";
import { Input, styled } from "@mui/material";
import QuizGenerateCard from "./QuizGenerateCard";
import Header from "../Header";
import GenerateButton from "./GenerateButton";
import AddButton from "./AddButton";

export default function CoursePage() {
  return (
    <div className="col-span-4 px-14">
      <Header />
      <QuizGenerateCard />
      <AddButton />
      <GenerateButton />
    </div>
  );
}
