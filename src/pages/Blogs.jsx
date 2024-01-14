import { Button, Label, Modal, Textarea } from "flowbite-react";
import React, { useState } from "react";
import BlogCard from "../components/BlogCard";

const Blogs = () => {
  const [openModal, setOpenModal] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    const blogDetail = event.target.blogDetail.value;

    console.log(blogDetail);

    setOpenModal(false);
  };
  return (
    <div className="container mx-auto min-h-screen">
      <div className="flex justify-between">
        <div>
          <Button color="failure">My blogs</Button>
          <Button color="failure">All blogs</Button>
        </div>
        <div>
          <Button onClick={() => setOpenModal(true)} color="failure">
            create blog
          </Button>
          <Modal show={openModal} onClose={() => setOpenModal(false)}>
            <Modal.Header>Create Blog</Modal.Header>
            <form onSubmit={handleSubmit}>
              <Modal.Body>
                <div className="max-w-md">
                  <div className="mb-2 block">
                    <Label htmlFor="blogDetail" value="Your blog" />
                  </div>
                  <Textarea
                    id="blogDetail"
                    placeholder="Write blog..."
                    required
                    rows={4}
                  />
                </div>
              </Modal.Body>
              <Modal.Footer>
                <Button type="submit" color="failure">
                  Post
                </Button>
                <Button color="gray" onClick={() => setOpenModal(false)}>
                  Discard
                </Button>
              </Modal.Footer>
            </form>
          </Modal>
        </div>
      </div>
      <div>{/* <BlogCard key={blog._id} blog={blog}></BlogCard> */}</div>
    </div>
  );
};

export default Blogs;
