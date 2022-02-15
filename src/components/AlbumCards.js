import React from "react";
import { Card } from "react-bootstrap";
import { Image } from "react-bootstrap";
import ReviewForm from "./ReviewForm";

function AlbumCard(props) {
    const { data } = props;
    // If someone goes to a link that is not working they will get a 404 warning otherwise ':' return the data
    return data == undefined ? <h1>404 Not Found</h1> : (
        // RETURNING TITLE, DATE AND CONTENT FROM LINES 17 - 32 
        <Card variant="danger">
            <Card.Header>{data.title}</Card.Header>
            <Card.Body>
                <Card.Subtitle>{data.date}</Card.Subtitle>
                <Image src={data.imgUrl} fluid />
                <Card.Text>{data.content}</Card.Text>
                <ReviewForm> </ReviewForm>
            </Card.Body>
        </Card>
    );
};

export default AlbumCard;









