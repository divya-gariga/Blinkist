import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Time } from "../../atoms/Icons/icons/icons";
import "./card.css";

interface CardProps {
    img: string;
    title: string;
    author: string;
    readTime: string;
}

const BookCards = ({
    img = "",
    title = "",
    author = "",
    readTime = ""
}: CardProps) => {
    return (
        <Card sx={{ maxWidth: 315 }} >
            <CardMedia component="img" height="287" image={img} />
            <CardContent sx={{ paddingBottom: '5px' }}>
                <div className="book-card_title">{title}</div>
                <div className="book-card_author">{author}</div>
                <div className="book-card_stats">
                    <div className="book-card_stats-item">
                        <span className="icon">
                            <Time />
                        </span>
                        <span className="book-card_readTime"> {readTime}</span>
                    </div>
                </div>
            </CardContent>
            <div className='button'></div>
        </Card>
    );
};

export default BookCards
