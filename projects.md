---
layout: page
title: Projects
permalink: /projects/
---
<section>
    <div class="container">
        <div class="post-list">
			{% for project in site.data.test %}
				{{ project.name}},
				{{ project.github}}
			{% endfor %}
		</div>
    </div>
</section>
