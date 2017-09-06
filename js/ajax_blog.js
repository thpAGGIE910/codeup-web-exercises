(function () {
    "use strict";

    $(document).ready(function () {
        var postsDiv = $("#posts");
        var blogPostsReq = $.get("./data/blog.json");
        
        blogPostsReq.done(function (posts) {
            posts = posts.reverse();
            postsDiv.empty();

            posts.forEach(function (post) {
                var blogPostCategories = "";

                post.categories.forEach(function (category) {
                    blogPostCategories += `<li class="blog-post-category label label-info">${ category }</li>`
                });

                var postHTML = `<div class="blog-post panel panel-default">
                                    <h2 class="blog-post-title">${ post.title }<span class="blog-posted-on">Posted on ${ post.date }</span></h2>
                                    <p class="blog-post-content">${ post.content }</p>
                                    <span>Categories:</span>
                                    <ul class="blog-post-categories-list">
                                        ${ blogPostCategories }
                                    </ul>
                                </div>`;

                postsDiv.append(postHTML);
            });
        });

        blogPostsReq.fail(function () {
            postsDiv.html("Error loading blog posts...");
        });
    });
})();