from pelican import signals


def post_stats(generator):
    for tag in iter(generator.tags):
        tag.articles_counter = len(generator.tags[tag])

    for author in iter(generator.authors):
        author[0].articles_counter = len(author[1])


def register():
    signals.article_generator_finalized.connect(post_stats)