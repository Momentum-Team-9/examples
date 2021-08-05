import string

STOP_WORDS = [
    "a",
    "an",
    "and",
    "are",
    "as",
    "at",
    "be",
    "by",
    "for",
    "from",
    "has",
    "he",
    "i",
    "in",
    "is",
    "it",
    "its",
    "of",
    "on",
    "that",
    "the",
    "to",
    "were",
    "will",
    "with",
]

longest_word_length = 0
word_manifest = {}


def use_count_as_key(items):
    """
    Provide a key for the sorted function so that words can be sorted by count.
    """
    return items[1]


def print_word_freq(file):
    """
    Read in `file` and print out the frequency of words in that file.
    """
    count_words(words(file))
    sorted_words = sorted(word_manifest.items(), key=use_count_as_key, reverse=True)
    for word, count in sorted_words:
        print(
            f"{word.rjust(longest_word_length + 1)}",
            " | ",
            str(count).ljust(4),
            ("*" * count),
        )


def transform_text(text):
    """
    Return a list of words lowercased with punctuation and stop words removed.
    """
    return [
        word.strip(string.punctuation).lower()
        for word in text
        if word not in STOP_WORDS
    ]


def words(file):
    """
    Open a file and return a list of each word in the file a string.
    """
    with open(file) as file:
        text = file.read()
        return text.split()


def count_words(text):
    """
    Call transform_text and then loop through words, setting longest word length.
    Record the occurrences of each word in the word_manifest.
    """
    text = transform_text(text)
    for word in text:
        check_for_longest_word(word)
        if word not in word_manifest:
            word_manifest[word] = 1
        else:
            word_manifest[word] += 1


def check_for_longest_word(word):
    """
    Set global variable for length of the longest word.
    """
    global longest_word_length
    if len(word) > longest_word_length:
        longest_word_length = len(word)


if __name__ == "__main__":
    import argparse
    from pathlib import Path

    parser = argparse.ArgumentParser(
        description="Get the word frequency in a text file."
    )
    parser.add_argument("file", help="file to read")
    args = parser.parse_args()

    file = Path(args.file)
    if file.is_file():
        print_word_freq(file)
    else:
        print(f"{file} does not exist!")
        exit(1)
