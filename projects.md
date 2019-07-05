---
layout: page
title: Projects
permalink: /projects/
---
<section>
    <div class="container">
        <div class="post-list">
			{% for project in site.data.projects %}
				<div class = "col-md-3 offset-md-1">
					{{ project.name}},
					{{ project.info}}
				</div>
			{% endfor %}
		</div>
    </div>
</section>
