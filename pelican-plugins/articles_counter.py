from pelican import signals
from collections import Counter

def post_stats(generator):
    for tag in iter(generator.tags):
        tag.articles_counter = len(generator.tags[tag])

    for author in iter(generator.authors):
        author[0].articles_counter = len(author[1])

    generator.context["years"] = dict(Counter([i.date.strftime('%Y') for i in iter(generator.articles)]))

def register():
    signals.article_generator_finalized.connect(post_stats)