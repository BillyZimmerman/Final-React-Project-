import React from "react";
import ReviewBox from "./ReviewBox";
import moment from "moment";

class ReviewForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            characters: 0,
            errorMessage: " ",
            post: []
        }

        this.newComment = this.newComment.bind(this);
        this.addComment = this.addComment.bind(this);

    }

    addComment(name, comment) {
        let previousPost = this.state.post;

        let newComment = {
            "postId": Math.random(),
            "id": Math.random(),
            "name": name,
            "body": comment
        }
        previousPost.push(newComment);

        this.setState({
            post: previousPost
        })

    }


    characterCount() {
        if (this.comment.value.length < 200) {
            this.setState({
                errorMessage: " "
            })
        }
        else {
            this.setState({
                errorMessage: " Max value exceeds "

            })

        }
        this.setState({
            characters: this.comment.value.length
        })


    }


    newComment() {
        if (this.name.value == 0 || this.comment.value == 0) {
            this.setState({
                errorMessage: " Can't submit empty, please add text "

            })


        }
        else if (!this.state.errorMessage == "") {
            this.addComment(this.name.value, this.comment.value);

            this.name.value = "";
            this.comment.value = "";
            this.setState({
                errorMessage: " "
            })
            this.setState({ characters: 0 });

        }

    }

    // STRUGGLING TO GET THIS TO WORK

    // THE CODE I AM TRYING TO GET TO WORK FOR THE DELETE BUTTON
    // =============================================================

    // deleteComment() {

    //     const [review, updateReview] = useState(this.state.post);

    //     const handleRemoveComment = (e) => {
    //         const name = e.target.getAttribute("name")
    //         updateReview(review.filter(comment => this.comment.name !== name));
    //     };

    // =============================================================

    // EXAMPLE CODE FOUND ONLINE

    // const [list, updateList] = useState(defaultList);

    // const handleRemoveItem = (e) => {
    //     const name = e.target.getAttribute("name")
    //     updateList(list.filter(item => item.name !== name));
    // };

    render() {
        return (
            <div className="container">

                <div> <p class="reviewText"> Review this album below! </p></div>

                <div class="field">
                    <label class="label"><b>Album Name</b></label>
                    <div class="control">
                        <input class="input" type="text" placeholder="Album Name" ref={(c) => this.name = c} />
                    </div></div>

                <div class="field">
                    <label class="label"><b>Review</b></label>
                    <div class="control">

                        <textarea class="textarea" placeholder="Album Review" ref={(c) => this.comment = c}
                            onKeyUp={this.characterCount.bind(this)}></textarea>

                        <p> {this.state.characters} characters (Max 200)  </p>
                        <button class="button is-primary" onClick={this.newComment}>Submit</button>
                    </div>
                </div>
                <div className="ReviewBox">
                    {
                        this.state.post.map((post) => <ReviewBox key={post.id} id={post.id} name={post.name} comment={post.body}
                            moment={moment().format('MMMM Do YYYY, h:mm:ss a')} />)
                    }
                </div>
            </div>
        );
    };
};

export default ReviewForm;