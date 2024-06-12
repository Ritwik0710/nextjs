"use client";
import Admin from "../page";
import classes from "../forms.module.css";
import Search from "../../../Elements/Search";
import Dropdown from "../../../Elements/Dropdown";
import Button from "../../../Elements/Button";
import Table from "@/app/components/Elements/Table";
import { deleteData, getQuery } from "@/app/Firebase";
import { useEffect, useRef, useState } from "react";
import Checkbox from "@/app/components/Elements/Checkbox";
function Bookings() {
  const Actions = ["delete", "change"];
  const arrRow = [["username", "coursename", "machinename"]];
  const arrCol = ["USER", "Course", "Machine"];
  let rows = [];
  const inputref = useRef(0);
  const [arr, setarr] = useState([[]]);
  const [inputval, setInputValue] = useState("");
  const [CheckboxMap, setCheckboxArr] = useState([]);
  const handleclick = ()=>{
    CheckboxMap.forEach((i)=> deleteData("slots",i));
    
  }
  useEffect(() => {
    getQuery("slots", "coursename", "!=", NaN).then((value) => {
      value.map((i) => {
        rows.push([
          i.data.email,
          i.data.coursename,
          i.data.time,
          i.data.date,
          i.id,
        ]);
      });
      // console.log();
      setarr(rows);
    });
  }, [ CheckboxMap]);

  useEffect(() => {
    console.log(CheckboxMap);
  }, [CheckboxMap])

  // courses
  //   .map((i) => {
  //     arr.push(getData("course/" + i + "/booked_slots"));
  //     console.log(arr);
  //   })

  return (
    <div>
      <Admin />
      <div className={classes.forms}>
        <h1>Select booking to change</h1>
        {/* <input type="text" placeholder="Search" /> */}
        <br></br>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            // placeholder={placeholder}
            aria-label="Recipient's username"
            aria-describedby="button-addon2"
            value={inputval}
            onChange={(e) => {
              setInputValue(e.target.value);
            }}
            ref={inputref}
          />
          <button
            className="btn btn-outline-secondary"
            type="button"
            id="button-addon2"
          >
            Search
          </button>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between" }}>
          {Dropdown(Actions, "Action")}
          {Button("Go", "",false,handleclick)}
        </div>
        <br></br>

        {Table(
          arr
            .map((i) => [
              <Checkbox key={i[4]} id={i[4]} handleChange={(val) => {
                setCheckboxArr((prev)=>  val
                  ? [...prev, i[4]]
                  : prev.filter((x) => x !== i[4])
                );
                
              } }/>,
              i[0],
              i[1],
              i[2],
            ])
            ?.filter(
              (i) =>
                i[1]?.includes(inputval) ||
                i[2]?.includes(inputval) ||
                i[3]?.includes(inputval)
            ),
          arrCol
        )}
        {/* <table>Table headers and rows go here</table> */}
      </div>
    </div>
  );
}

export default Bookings;
