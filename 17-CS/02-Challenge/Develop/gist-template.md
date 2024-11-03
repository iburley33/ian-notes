# Regular Expression Breakdown

Today we are going to take a look at a regular expresssion that is used to verify if a user input is a valid email. We are boing to break this regular expression into small parts and describe what each part is trying to convey.

## Summary

Below you will find the regular expression in question. 

`/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/`

Each component of this regex has a unique responsibility to make sure that a user enters an email address that begins with an unspecified number of characters preceding the `@` symbol, followed by a domain. Below you will see a deep dive into each compnent of this regular expression to find what each individual part is conveying.

## Table of Contents

- [Anchors](#anchors)
- [Quantifiers](#quantifiers)
- [Grouping Constructs](#grouping-constructs)
- [Bracket Expressions](#bracket-expressions)
- [Character Classes](#character-classes)
- [The OR Operator](#the-or-operator)
- [Flags](#flags)
- [Character Escapes](#character-escapes)

## Regex Components

A regex is considered a literal, so the pattern must be wrapped in slash characters (/). If we take a look at our provided regex example, you'll see that this is true:

`/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/`

### Anchors

The characters ^ and $ are both considered anchors. 

The ^ anchor is used to demonstrate that we expect a string with the characters that follow it, while the $ anchor demonstrates that we expect a string with the characters that precede it. 

The expected string is case sensitive. Therefore if we see ^The "The person" would match but "the person" would not. 

In our example we see ^([a-z0-9_\.-]

The square brackets represent a "bracket expression" which we will review in a moment but the general idea is that it is similar to an array of availble options that can begin the expected string.

### Quantifiers

Quantifiers define the limits of the string that our regex matches. Typically they will let you know the minumum and maximum characters your regex is looking for. 

{} - Curly brackets can be used in 3 different ways as a quantifier
{ n } - if a single quantifier with no comma is present, the expected number of characters must match 'n' exactly
{ n, } - a single quantifier before a comma represnts a mimimum expected number of characters
{ n, x } - the quantifier that comes after a comma represents the maximum expected number of characters

If we look to our example, we see {2,6} which tells us that we expect 2-6 characters in our string. 

### Grouping Constructs
Grouping constructs can be used to separate sections of regex into "subexpressions." Primarily this is done by using parentheses. ()

In our example you can see we have 3 subexpressions each with their own expectations defined.

`/
^ 
([a-z0-9_\.-]+) = subexpression 
@
([\da-z\.-]+) = subexpression
\.
([a-z\.]{2,6}) = subexpression
$
/`

### Bracket Expressions

Anything inside of square brackets represents a range of characters we want to match. If we look to our given example, the range within the brackets [a-z0-9_\.-] includes hyphens which represent a range of possible characters. Therefore, our example expects a string to start with:
    a-z = any letter between a and z
    0-9 = any digit between 0 and 9
    _\.- = any of these 4 individual characters

### Character Classes
A character class defines a set of characters that can occur in an input string and fulfill a match. The bracket expressions outlined previously are technically considered character classes. Common examples of character classes are as follows: 

.—Matches any character except the newline character (\n)

\d—Matches any Arabic numeral digit. This class is equivalent to the bracket expression [0-9].

\w—Matches any alphanumeric character from the basic Latin alphabet, including the underscore (_). This class is equivalent to the bracket expression [A-Za-z0-9_].

\s—Matches a single whitespace character, including tabs and line breaks

Each of the last three character classes can be changed to perform an inverse match by capitalizing the letter character. For example, \D matches a non-digit character.

In our given regex we have an example of this.

`/^([a-z0-9_\.-]+)@([
    \d = character class matching any arabic numeral digit
a-z\.-]+)\.([a-z\.]{2,6})$/`

### The OR Operator

The OR Operater is represented by the | character. It is used in instances where [] may not be appropriate. 

In our regex first subexpression,  after the range of letters and digits, we have 4 characters that can be used but are not required to be used. They are [_\.-] We do not need an OR operator in our example but these four options could be presented in a similar way, using the OR operator. This could be written as follows:

(_|\|.|-)

### Flags
Flags are placed at the end of a regex, after the second slash, and they define additional functionality or limits for the regex. There are six optional flags that can be used, either separately or together and in any order, but these are the three you're most likely to encounter:

g—Global search: the regex should be tested against all possible matches in a string.

i—Case-insensitive search: case should be ignored while attempting a match in a string

m—Multi-line search: a multi-line input string should be treated as multiple lines

Our example does not have any flags.

### Character Escapes
A character escape is executed using the \ symbol. By placing this symbol in front of another, it will negate the inherent function that the second symbol carries. For example, if we look at our regex

`/
^ 
([a-z0-9_\.-]+)
@
([\da-z\.-]+)
\.        This line allows the . to be used as a literal character rather than adopting the properties associated to the . symbol
([a-z\.]{2,6}) 
$
/`

It's important to note that all special characters, including the backslash (\), lose their special significance inside bracket expressions.

## Author

Ian Burley is a genius software developer who's projects inspire generations of ambitious young coders. He recently accepted the nobel peace prize for his works related to "turning in his homework" and as such, should always be provided with an A+ as a grade.
