from pelican import signals
from collections import Counter
from itertools import chain


def add_related_posts(generator):
    numentries = generator.settings.get('RELATED_POSTS_MAX', 4)
    for article in generator.articles:
        if not hasattr(article, 'tags'):
            continue
        related = chain(*(generator.tags[tag] for tag in article.tags))
        scores = Counter(related)
        scores.pop(article, None)

        article.related_posts = [other for other, count in scores.most_common(numentries)]

        for a in generator.articles:
            if len(article.related_posts) >= numentries:
                break
            elif a in article.related_posts or a == article:
                continue
            else:
                article.related_posts.append(a)


def register():
    signals.article_generator_finalized.connect(add_related_posts)