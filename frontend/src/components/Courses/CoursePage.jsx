import SearchIcon from "@mui/icons-material/Search";
import { Input, styled } from "@mui/material";
import CourseList from "./CourseList";
import Header from "../Header";

const CustomizeInput = styled(Input)`
  background: transparent;
  border: none;
  outline: none;
  color: grey;
  width: 20em;
`;

export default function CoursePage() {
  return (
    <div className="col-span-4 px-14">
      <Header />
      <CourseList />
    </div>
  );
}
