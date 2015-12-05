#!/usr/bin/env python
# -*- coding: utf-8 -*- #
from __future__ import unicode_literals

SITENAME = u'Crystalnix'
SITE_URL = u'crystalnix.com.s3-website-us-west-2.amazonaws.com'

PATH = 'content'

TIMEZONE = 'Europe/Paris'

DEFAULT_LANG = u'en'

# Feed generation is usually not desired when developing
FEED_ALL_ATOM = None
CATEGORY_FEED_ATOM = None
TRANSLATION_FEED_ATOM = None
AUTHOR_FEED_ATOM = None
AUTHOR_FEED_RSS = None

# Blogroll
LINKS = (('Pelican', 'http://getpelican.com/'),
         ('Python.org', 'http://python.org/'),
         ('Jinja2', 'http://jinja.pocoo.org/'),
         ('You can modify those links in your config file', '#'),)

# Social widget
SOCIAL = (('You can add links in your config file', '#'),
          ('Another social link', '#'),)

DEFAULT_PAGINATION = 5

# Uncomment following line if you want document-relative URLs when developing
#RELATIVE_URLS = True

THEME = 'theme/crystalnix'

STATIC_PATHS = ['media']

DEFAULT_DATE_FORMAT = '%a %d %B %Y'

SUMMARY_MAX_LENGTH = 50

BLOG_URL = "/blogs/"
ARTICLE_URL = 'blogs/{slug}.html'
ARTICLE_SAVE_AS = 'blogs/{slug}.html'

WORKS_URL = "/works/"
PAGE_URL = 'works/{slug}.html'
PAGE_SAVE_AS = 'works/{slug}.html'

TAGS_SAVE_AS = ''
TAG_URL = ''
TAG_SAVE_AS = ''

CATEGORIES_SAVE_AS = ''
CATEGORY_URL = ''
CATEGORY_SAVE_AS = ''

AUTHORS_SAVE_AS = ''
AUTHOR_URL = ''
AUTHOR_SAVE_AS = ''

ARCHIVES_SAVE_AS = ''

TEMPLATE_PAGES = {
    "services.html"     : "services/index.html",
    "contacts.html"     : "contacts/index.html",
    "works.html"        : "works/index.html",
    "work.template"     : "works/works.json",
    "blogs.html"        : "blogs/index.html",
    "blog.template"     : "blogs/blogs.json"
}

LOAD_CONTENT_CACHE = False

PLUGIN_PATHS = ['./pelican-plugins']
PLUGINS = ['neighbors', 'articles_counter']

SIMPLE_FORM_TOKEN = "0c0c9b03a05373c1dd541ebfae44dcbb"

URL = {
    "CDN"   : "https://cdn.jsdelivr.net",
    "IMG"   : "/theme/img",
    "CSS"   : "/theme/css",
    "JS"    : "/theme/js",
    "FONTS" : "/theme/fonts"
}
