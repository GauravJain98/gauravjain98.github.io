---
layout: page
title: Nothing
permalink: /nothing/
---
skvdhgvduisvb
<section>
    <div class="container">
        <div class="post-list">
			{{site.projects}}
			{% for project in site.projects %}
				{{ project.title}}
			<!-- <div class="post-box">
				<div class="post-title">
					<a class="post-title" href="{{post.url | prepend:site.baseurl }}" > {{ post.title }}</a>
				</div>
				<div class="post-excerpt">
					{{ post.content | strip_html | truncatewords:20}}
				</div>
				<div class="posted">
					posted on
					<span class="posted-on">
						{{ post.date | date: "%A, %B %-d, %Y" }}
					</span>
					<span class="in">
						in
					</span>
					<span class="categories-on">
						{% for category in post.categories%}
							{{category}}{% if forloop.last %}{% else %},{% endif %}
						{% endfor %}
					</span>
				</div>
			</div> -->
			{% endfor %}
		</div>
    </div>
</section>
