import React, { useReducer, useRef } from "react";
import {Dropdown} from 'react-bootstrap';
import {DropdownButton} from 'react-bootstrap';
import SearchForm from "./components/SearchForm";
import Table from "./components/Table";
import {allReviews} from "../../../models/reviewmodeles";
import "./App.css";

let reviewsEntered = allReviews;
console.log(reviewsEntered);

