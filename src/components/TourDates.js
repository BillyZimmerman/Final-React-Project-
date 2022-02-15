import React from "react";
import { Table } from "react-bootstrap";

function Tour(props) {
    return (
        <Table striped bordered hover variant="dark">
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Location</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>27 MAY 2022</td>
                    <td>ST LOUIS</td>
                </tr>
                <tr>
                    <td>29 MAY 2022</td>
                    <td>CLEVELAND</td>
                </tr>
                <tr>
                    <td>01 JUN 2022</td>
                    <td colSpan="2">MINNEAPOLIS</td>
                </tr>
                <tr>
                    <td>02 JUN 2022</td>
                    <td>CHICAGO</td>
                </tr>
                <tr>
                    <td>04 JUN 2022</td>
                    <td>DETROIT</td>
                </tr>
                <tr>
                    <td>06 JUN 2022</td>
                    <td>TORONTO</td>
                </tr>
                <tr>
                    <td>08 JUN 2022</td>
                    <td>MONTREAL</td>
                </tr>
                <tr>
                    <td>10 JUN 2022</td>
                    <td>NORTH ADAMS</td>
                </tr>
            </tbody>
        </Table>
    );
};




export default Tour;