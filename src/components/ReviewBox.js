import React from "react";
class ReviewBox extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isAbusive: false,
        }
    }

    toggleAbuse(event) {
        event.preventDefault();
        this.setState({
            isAbusive: !this.state.isAbusive
        })
    }

    // =============================================================
    // FEATURES I LIKE BUT NOT FOR THIS ASSIGNMENT, KEEPING IT TO REFRENCE 

    // likeCounter(event) {

    //     event.preventDefault();
    //     let like = this.state.totalLike;
    //     like++;
    //     this.setState({
    //         totalLike: like
    //     })

    // }

    // dislikeCounter(event) {

    //     event.preventDefault();
    //     let dislike = this.state.totalDislike;
    //     dislike++;
    //     this.setState({
    //         totalDislike: dislike
    //     })

    // }

    // =============================================================

    render() {
        let commentBody;
        if (this.state.isAbusive === false) {
            commentBody = this.props.comment;
        }
        else {
            commentBody = <em> comment marks as abusive </em>
        }
        return (

            <div className="container">

                <div class="card">
                    <header class="card-header">
                        <p class="card-header-title">
                            {this.props.name}
                        </p>
                    </header>
                    <div class="card-content">
                        <div class="content">
                            {commentBody}
                        </div>
                    </div>


                    <footer class="card-footer">

                        {/* THIS IS WHERE THE DELETE BUTTON SHOULD GO */}
                        {/* <div>
                            {post.map(comment => {
                                return (
                                    <>
                                        <span name={comment.name} onClick={handleRemoveComment}>
                                            x
                                        </span>
                                        <span>{comment.name}</span>
                                        <button>Delete</button>
                                    </>
                                );
                            })}
                        </div> */}

                        {/* A DIFFERENT IDEA THAT I COULD NOT FIGURE OUT  */}
                        {/* <span>{item.name}</span> <button onClick={this.delete.bind(this, item)}>Delete</button> */}


                        {/* EXAMPLE CODE FOUND ONLINE */}
                        {/* <div>
                            {list.map(item => {
                                return (
                                    <>
                                        <span name={item.name} onClick={handleRemoveComment}>
                                            x
                                        </span>
                                        <span>{item.name}</span>
                                    </>
                                );
                            })}
                        </div> */}

                        {/* EXAMPLES NOT BEING USED FOR LIKE AND DISLIKE BUTTONS */}

                        {/* <a href=" " class="card-footer-item" onClick={this.likeCounter.bind(this)}> <p> ({this.state.totalLike}) </p> 
                        <i class="fa fa-thumbs-o-up fa-2x" aria-hidden="true" ></i></a> */}
                        {/* <a href=" " class="card-footer-item" onClick={this.toggleAbuse.bind(this)}>
                        <i class="fa fa-times fa-2x" aria-hidden="true"></i></a> */}
                        {/* <a href=" " class="card-footer-item" onClick={this.dislikeCounter.bind(this)}><p>({this.state.totalDislike})</p>
                        <i class="fa fa-thumbs-o-down fa-2x" aria-hidden="true"></i></a> */}
                    </footer>
                </div>
            </div>
        );
    };
};

export default ReviewBox;