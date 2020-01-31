import re

import pdf_redactor

options = pdf_redactor.RedactorOptions()

options.content_filters = [
    (re.compile(u".*"), lambda m: ""),
]

pdf_redactor.redactor(options)
