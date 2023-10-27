// src/ViewFullStory.js

import { getStoryApi } from "api/getstory";
import DemoNavbar from "components/Navbars/DemoNavbar";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbars from "./Navbars";
import ViewStoryNavbar from "./ViewStoryNavbar";
import { useForm, Controller, reset } from "react-hook-form";
import { FormGroup } from "reactstrap";
import { addCommentApi } from "api/getstory";
import moment from "moment";

const ViewFullStory = () => {
  const { id } = useParams();
  const [storyData, setStoryData] = useState();
  const [isAddComment, setIsAddComment] = useState(false);

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
  const getStoryById = async (postId) => {
    const storyData = await getStoryApi(postId);
    console.log(storyData);
    setStoryData(storyData.data[0]);
  };

  const onSubmit = async (comment) => {
    const commentData = await addCommentApi(comment, id);
    getStoryById(id);
    const commentInput = document.getElementById("comment");
    if (commentInput) {
      commentInput.value = "";
    }
    setIsAddComment(false);
  };
  useEffect(() => {
    getStoryById(id);
  }, []);
  return (
    <div>
      <ViewStoryNavbar />
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title text-center">
                  {storyData && storyData.title}
                  <hr />
                </h5>
                <p className="card-text">
                  {storyData && storyData.story}
                  <br />
                  <b>Total Views - {storyData && storyData.views}</b>
                </p>

                <hr />
                <div>
                  {isAddComment ? null : (
                    <button
                      type="button"
                      class="btn btn-primary btn-sm"
                      onClick={() => {
                        setIsAddComment(true);
                      }}
                    >
                      Add Comment
                    </button>
                  )}

                  {isAddComment ? (
                    <FormGroup>
                      <label htmlFor="comment">Add Comment</label>
                      <Controller
                        name="comment"
                        control={control}
                        rules={{ required: "Comment is required" }}
                        render={({ field }) => (
                          <div className="form-group">
                            <textarea
                              className="form-control"
                              placeholder="Write your comment here..."
                              id="comment"
                              rows="3"
                              {...field}
                            ></textarea>
                          </div>
                        )}
                      />
                      {errors.comment && (
                        <>
                          <figcaption class="blockquote-footer text-danger">
                            {errors.comment.message}
                          </figcaption>
                          <br />
                        </> 
                      )}
                      <button
                        type="button"
                        className="btn btn-primary btn-sm"
                        onClick={handleSubmit(onSubmit)}
                      >
                        Submit
                      </button>{" "}
                      <button
                        type="button" // Change 'submit' to 'button' and handle click event
                        className="btn btn-danger btn-sm"
                        onClick={() => {
                          setIsAddComment(false);
                        }}
                      >
                        Close
                      </button>
                    </FormGroup>
                  ) : null}
<br /><br />
                  {storyData &&
                    storyData?.comments?.map((item, index) => {
                      return (
                        <>
                          {item.comment}
                          <figcaption class="blockquote-footer">
                            {moment(item.created_at).format(
                              "DD-MM-YYYY [at] h:mm A"
                            )}{" "}
                          </figcaption>
                          <br />
                        </>
                      );
                    })}

                  <p></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewFullStory;
