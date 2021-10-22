/// <reference types="node" />

declare class Lexer {
	constructor(options?: MarkedOptions);
	tokens: TokensList;
	options: MarkedOptions;
	rules: Rules;
	static rules: Rules;
	static lex(src: string, options?: MarkedOptions): TokensList;
	static lexInline(src: string, options?: MarkedOptions): Token[];
	lex(src: string): TokensList;
	blockTokens(src: string, tokens: Token[]): Token[];
	blockTokens(src: string, tokens: TokensList): TokensList;
	inline(src: string, tokens: Token[]): void;
	inlineTokens(src: string, tokens: Token[]): Token[];
	state: {
		inLink: boolean;
		inRawBlock: boolean;
		top: boolean;
	};
}
declare class Parser {
	constructor(options?: MarkedOptions);
	tokens: Token[] | TokensList;
	token: Token | null;
	options: MarkedOptions;
	renderer: Renderer;
	textRenderer: TextRenderer;
	slugger: Slugger;
	static parse(src: Token[] | TokensList, options?: MarkedOptions): string;
	static parseInline(src: Token[], options?: MarkedOptions): string;
	parse(src: Token[] | TokensList): string;
	parseInline(src: Token[], renderer: Renderer): string;
	next(): Token;
}
declare class Renderer<T = never> {
	constructor(options?: MarkedOptions);
	options: MarkedOptions;
	code(this: RendererThis, code: string, language: string | undefined, isEscaped: boolean): string | T;
	blockquote(this: RendererThis, quote: string): string | T;
	html(this: RendererThis, html: string): string | T;
	heading(this: RendererThis, text: string, level: 1 | 2 | 3 | 4 | 5 | 6, raw: string, slugger: Slugger): string | T;
	hr(this: RendererThis): string | T;
	list(this: RendererThis, body: string, ordered: boolean, start: number): string | T;
	listitem(this: RendererThis, text: string, task: boolean, checked: boolean): string | T;
	checkbox(this: RendererThis, checked: boolean): string | T;
	paragraph(this: RendererThis, text: string): string | T;
	table(this: RendererThis, header: string, body: string): string | T;
	tablerow(this: RendererThis, content: string): string | T;
	tablecell(this: RendererThis, content: string, flags: {
		header: boolean;
		align: "center" | "left" | "right" | null;
	}): string | T;
	strong(this: RendererThis, text: string): string | T;
	em(this: RendererThis, text: string): string | T;
	codespan(this: RendererThis, code: string): string | T;
	br(this: RendererThis): string | T;
	del(this: RendererThis, text: string): string | T;
	link(this: RendererThis, href: string | null, title: string | null, text: string): string | T;
	image(this: RendererThis, href: string | null, title: string | null, text: string): string | T;
	text(this: RendererThis, text: string): string | T;
}
declare class Slugger {
	seen: {
		[slugValue: string]: number;
	};
	slug(value: string, options?: SluggerOptions): string;
}
declare class TextRenderer {
	strong(text: string): string;
	em(text: string): string;
	codespan(text: string): string;
	del(text: string): string;
	text(text: string): string;
	link(href: string | null, title: string | null, text: string): string;
	image(href: string | null, title: string | null, text: string): string;
	br(): string;
	html(text: string): string;
}
declare class Tokenizer<T = never> {
	constructor(options?: MarkedOptions);
	options: MarkedOptions;
	space(this: TokenizerThis, src: string): Tokens.Space | T;
	code(this: TokenizerThis, src: string): Tokens.Code | T;
	fences(this: TokenizerThis, src: string): Tokens.Code | T;
	heading(this: TokenizerThis, src: string): Tokens.Heading | T;
	hr(this: TokenizerThis, src: string): Tokens.Hr | T;
	blockquote(this: TokenizerThis, src: string): Tokens.Blockquote | T;
	list(this: TokenizerThis, src: string): Tokens.List | T;
	html(this: TokenizerThis, src: string): Tokens.HTML | T;
	def(this: TokenizerThis, src: string): Tokens.Def | T;
	table(this: TokenizerThis, src: string): Tokens.Table | T;
	lheading(this: TokenizerThis, src: string): Tokens.Heading | T;
	paragraph(this: TokenizerThis, src: string): Tokens.Paragraph | T;
	text(this: TokenizerThis, src: string): Tokens.Text | T;
	escape(this: TokenizerThis, src: string): Tokens.Escape | T;
	tag(this: TokenizerThis, src: string): Tokens.Tag | T;
	link(this: TokenizerThis, src: string): Tokens.Image | Tokens.Link | T;
	reflink(this: TokenizerThis, src: string, links: Tokens.Link[] | Tokens.Image[]): Tokens.Link | Tokens.Image | Tokens.Text | T;
	emStrong(this: TokenizerThis, src: string, maskedSrc: string, prevChar: string): Tokens.Em | Tokens.Strong | T;
	codespan(this: TokenizerThis, src: string): Tokens.Codespan | T;
	br(this: TokenizerThis, src: string): Tokens.Br | T;
	del(this: TokenizerThis, src: string): Tokens.Del | T;
	autolink(this: TokenizerThis, src: string, mangle: (cap: string) => string): Tokens.Link | T;
	url(this: TokenizerThis, src: string, mangle: (cap: string) => string): Tokens.Link | T;
	inlineText(this: TokenizerThis, src: string, smartypants: (cap: string) => string): Tokens.Text | T;
}
declare const defaults: MarkedOptions;
declare function getDefaults(): MarkedOptions;
declare function lexer(src: string, options?: MarkedOptions): TokensList;
declare function marked(src: string, options: marked.MarkedOptions, callback: (error: any | undefined, parseResult: string) => void): void;
declare function marked(src: string, callback: (error: any | undefined, parseResult: string) => void): void;
declare function marked(src: string, options?: marked.MarkedOptions): string;
declare function options(options: MarkedOptions): typeof marked;
declare function parse(src: string, options?: MarkedOptions, callback?: (error: any | undefined, parseResult: string) => void): string;
declare function parse(src: string, callback: (error: any | undefined, parseResult: string) => void): string;
declare function parseInline(src: string, options?: MarkedOptions): string;
declare function parser(src: Token[] | TokensList, options?: MarkedOptions): string;
declare function setOptions(options: MarkedOptions): typeof marked;
declare function use(...extensions: MarkedExtension[]): void;
declare function walkTokens(tokens: Token[] | TokensList, callback: (token: Token) => void): typeof marked;
export declare namespace marked {
	const defaults: MarkedOptions;
	/**
	 * @param src String of markdown source to be compiled
	 * @param options Hash of options
	 */
	function lexer(src: string, options?: MarkedOptions): TokensList;
	/**
	 * Compiles markdown to HTML.
	 *
	 * @param src String of markdown source to be compiled
	 * @param callback Function called when the markdownString has been fully parsed when using async highlighting
	 * @return String of compiled HTML
	 */
	function parse(src: string, callback: (error: any | undefined, parseResult: string) => void): string;
	/**
	 * Compiles markdown to HTML.
	 *
	 * @param src String of markdown source to be compiled
	 * @param options Hash of options
	 * @param callback Function called when the markdownString has been fully parsed when using async highlighting
	 * @return String of compiled HTML
	 */
	function parse(src: string, options?: MarkedOptions, callback?: (error: any | undefined, parseResult: string) => void): string;
	/**
	 * @param src Tokenized source as array of tokens
	 * @param options Hash of options
	 */
	function parser(src: Token[] | TokensList, options?: MarkedOptions): string;
	/**
	 * Compiles markdown to HTML without enclosing `p` tag.
	 *
	 * @param src String of markdown source to be compiled
	 * @param options Hash of options
	 * @return String of compiled HTML
	 */
	function parseInline(src: string, options?: MarkedOptions): string;
	/**
	 * Sets the default options.
	 *
	 * @param options Hash of options
	 */
	function options(options: MarkedOptions): typeof marked;
	/**
	 * Sets the default options.
	 *
	 * @param options Hash of options
	 */
	function setOptions(options: MarkedOptions): typeof marked;
	/**
	 * Gets the original marked default options.
	 */
	function getDefaults(): MarkedOptions;
	function walkTokens(tokens: Token[] | TokensList, callback: (token: Token) => void): typeof marked;
	/**
	 * Use Extension
	 * @param MarkedExtension
	 */
	function use(...extensions: MarkedExtension[]): void;
	class Tokenizer<T = never> {
		constructor(options?: MarkedOptions);
		options: MarkedOptions;
		space(this: TokenizerThis, src: string): Tokens.Space | T;
		code(this: TokenizerThis, src: string): Tokens.Code | T;
		fences(this: TokenizerThis, src: string): Tokens.Code | T;
		heading(this: TokenizerThis, src: string): Tokens.Heading | T;
		hr(this: TokenizerThis, src: string): Tokens.Hr | T;
		blockquote(this: TokenizerThis, src: string): Tokens.Blockquote | T;
		list(this: TokenizerThis, src: string): Tokens.List | T;
		html(this: TokenizerThis, src: string): Tokens.HTML | T;
		def(this: TokenizerThis, src: string): Tokens.Def | T;
		table(this: TokenizerThis, src: string): Tokens.Table | T;
		lheading(this: TokenizerThis, src: string): Tokens.Heading | T;
		paragraph(this: TokenizerThis, src: string): Tokens.Paragraph | T;
		text(this: TokenizerThis, src: string): Tokens.Text | T;
		escape(this: TokenizerThis, src: string): Tokens.Escape | T;
		tag(this: TokenizerThis, src: string): Tokens.Tag | T;
		link(this: TokenizerThis, src: string): Tokens.Image | Tokens.Link | T;
		reflink(this: TokenizerThis, src: string, links: Tokens.Link[] | Tokens.Image[]): Tokens.Link | Tokens.Image | Tokens.Text | T;
		emStrong(this: TokenizerThis, src: string, maskedSrc: string, prevChar: string): Tokens.Em | Tokens.Strong | T;
		codespan(this: TokenizerThis, src: string): Tokens.Codespan | T;
		br(this: TokenizerThis, src: string): Tokens.Br | T;
		del(this: TokenizerThis, src: string): Tokens.Del | T;
		autolink(this: TokenizerThis, src: string, mangle: (cap: string) => string): Tokens.Link | T;
		url(this: TokenizerThis, src: string, mangle: (cap: string) => string): Tokens.Link | T;
		inlineText(this: TokenizerThis, src: string, smartypants: (cap: string) => string): Tokens.Text | T;
	}
	type TokenizerObject = Partial<Omit<Tokenizer<false>, "constructor" | "options">>;
	class Renderer<T = never> {
		constructor(options?: MarkedOptions);
		options: MarkedOptions;
		code(this: RendererThis, code: string, language: string | undefined, isEscaped: boolean): string | T;
		blockquote(this: RendererThis, quote: string): string | T;
		html(this: RendererThis, html: string): string | T;
		heading(this: RendererThis, text: string, level: 1 | 2 | 3 | 4 | 5 | 6, raw: string, slugger: Slugger): string | T;
		hr(this: RendererThis): string | T;
		list(this: RendererThis, body: string, ordered: boolean, start: number): string | T;
		listitem(this: RendererThis, text: string, task: boolean, checked: boolean): string | T;
		checkbox(this: RendererThis, checked: boolean): string | T;
		paragraph(this: RendererThis, text: string): string | T;
		table(this: RendererThis, header: string, body: string): string | T;
		tablerow(this: RendererThis, content: string): string | T;
		tablecell(this: RendererThis, content: string, flags: {
			header: boolean;
			align: "center" | "left" | "right" | null;
		}): string | T;
		strong(this: RendererThis, text: string): string | T;
		em(this: RendererThis, text: string): string | T;
		codespan(this: RendererThis, code: string): string | T;
		br(this: RendererThis): string | T;
		del(this: RendererThis, text: string): string | T;
		link(this: RendererThis, href: string | null, title: string | null, text: string): string | T;
		image(this: RendererThis, href: string | null, title: string | null, text: string): string | T;
		text(this: RendererThis, text: string): string | T;
	}
	type RendererObject = Partial<Omit<Renderer<false>, "constructor" | "options">>;
	class TextRenderer {
		strong(text: string): string;
		em(text: string): string;
		codespan(text: string): string;
		del(text: string): string;
		text(text: string): string;
		link(href: string | null, title: string | null, text: string): string;
		image(href: string | null, title: string | null, text: string): string;
		br(): string;
		html(text: string): string;
	}
	class Parser {
		constructor(options?: MarkedOptions);
		tokens: Token[] | TokensList;
		token: Token | null;
		options: MarkedOptions;
		renderer: Renderer;
		textRenderer: TextRenderer;
		slugger: Slugger;
		static parse(src: Token[] | TokensList, options?: MarkedOptions): string;
		static parseInline(src: Token[], options?: MarkedOptions): string;
		parse(src: Token[] | TokensList): string;
		parseInline(src: Token[], renderer: Renderer): string;
		next(): Token;
	}
	class Lexer {
		constructor(options?: MarkedOptions);
		tokens: TokensList;
		options: MarkedOptions;
		rules: Rules;
		static rules: Rules;
		static lex(src: string, options?: MarkedOptions): TokensList;
		static lexInline(src: string, options?: MarkedOptions): Token[];
		lex(src: string): TokensList;
		blockTokens(src: string, tokens: Token[]): Token[];
		blockTokens(src: string, tokens: TokensList): TokensList;
		inline(src: string, tokens: Token[]): void;
		inlineTokens(src: string, tokens: Token[]): Token[];
		state: {
			inLink: boolean;
			inRawBlock: boolean;
			top: boolean;
		};
	}
	class Slugger {
		seen: {
			[slugValue: string]: number;
		};
		slug(value: string, options?: SluggerOptions): string;
	}
	interface SluggerOptions {
		dryrun: boolean;
	}
	interface Rules {
		[ruleName: string]: RegExp | Rules;
	}
	type TokensList = Token[] & {
		links: {
			[key: string]: {
				href: string | null;
				title: string | null;
			};
		};
	};
	type Token = Tokens.Space | Tokens.Code | Tokens.Heading | Tokens.Table | Tokens.Hr | Tokens.Blockquote | Tokens.List | Tokens.ListItem | Tokens.Paragraph | Tokens.HTML | Tokens.Text | Tokens.Def | Tokens.Escape | Tokens.Tag | Tokens.Image | Tokens.Link | Tokens.Strong | Tokens.Em | Tokens.Codespan | Tokens.Br | Tokens.Del;
	namespace Tokens {
		interface Space {
			type: "space";
			raw: string;
		}
		interface Code {
			type: "code";
			raw: string;
			codeBlockStyle?: "indented" | undefined;
			lang?: string | undefined;
			text: string;
		}
		interface Heading {
			type: "heading";
			raw: string;
			depth: number;
			text: string;
			tokens: Token[];
		}
		interface Table {
			type: "table";
			raw: string;
			align: Array<"center" | "left" | "right" | null>;
			header: TableCell[];
			rows: TableCell[][];
		}
		interface TableCell {
			text: string;
			tokens: Token[];
		}
		interface Hr {
			type: "hr";
			raw: string;
		}
		interface Blockquote {
			type: "blockquote";
			raw: string;
			text: string;
			tokens: Token[];
		}
		interface List {
			type: "list";
			raw: string;
			ordered: boolean;
			start: number | "";
			loose: boolean;
			items: ListItem[];
		}
		interface ListItem {
			type: "list_item";
			raw: string;
			task: boolean;
			checked?: boolean | undefined;
			loose: boolean;
			text: string;
			tokens: Token[];
		}
		interface Paragraph {
			type: "paragraph";
			raw: string;
			pre?: boolean | undefined;
			text: string;
			tokens: Token[];
		}
		interface HTML {
			type: "html";
			raw: string;
			pre: boolean;
			text: string;
		}
		interface Text {
			type: "text";
			raw: string;
			text: string;
			tokens?: Token[] | undefined;
		}
		interface Def {
			type: "def";
			raw: string;
			tag: string;
			href: string;
			title: string;
		}
		interface Escape {
			type: "escape";
			raw: string;
			text: string;
		}
		interface Tag {
			type: "text" | "html";
			raw: string;
			inLink: boolean;
			inRawBlock: boolean;
			text: string;
		}
		interface Link {
			type: "link";
			raw: string;
			href: string;
			title: string;
			text: string;
			tokens: Token[];
		}
		interface Image {
			type: "image";
			raw: string;
			href: string;
			title: string;
			text: string;
		}
		interface Strong {
			type: "strong";
			raw: string;
			text: string;
			tokens: Token[];
		}
		interface Em {
			type: "em";
			raw: string;
			text: string;
			tokens: Token[];
		}
		interface Codespan {
			type: "codespan";
			raw: string;
			text: string;
		}
		interface Br {
			type: "br";
			raw: string;
		}
		interface Del {
			type: "del";
			raw: string;
			text: string;
			tokens: Token[];
		}
		interface Generic {
			[index: string]: any;
			type: string;
			raw: string;
			tokens?: Token[] | undefined;
		}
	}
	interface TokenizerThis {
		lexer: Lexer;
	}
	interface TokenizerExtension {
		name: string;
		level: "block" | "inline";
		start?: ((this: TokenizerThis, src: string) => number) | undefined;
		tokenizer: (this: TokenizerThis, src: string, tokens: Token[] | TokensList) => Tokens.Generic | void;
		childTokens?: string[] | undefined;
	}
	interface RendererThis {
		parser: Parser;
	}
	interface RendererExtension {
		name: string;
		renderer: (this: RendererThis, token: Tokens.Generic) => string | false;
	}
	interface MarkedExtension {
		/**
		 * A prefix URL for any relative link.
		 */
		baseUrl?: string | undefined;
		/**
		 * Enable GFM line breaks. This option requires the gfm option to be true.
		 */
		breaks?: boolean | undefined;
		/**
		 * Add tokenizers and renderers to marked
		 */
		extensions?: Array<TokenizerExtension | RendererExtension | (TokenizerExtension & RendererExtension)> | undefined;
		/**
		 * Enable GitHub flavored markdown.
		 */
		gfm?: boolean | undefined;
		/**
		 * Include an id attribute when emitting headings.
		 */
		headerIds?: boolean | undefined;
		/**
		 * Set the prefix for header tag ids.
		 */
		headerPrefix?: string | undefined;
		/**
		 * A function to highlight code blocks. The function can either be
		 * synchronous (returning a string) or asynchronous (callback invoked
		 * with an error if any occurred during highlighting and a string
		 * if highlighting was successful)
		 */
		highlight?(code: string, lang: string, callback?: (error: any | undefined, code?: string) => void): string | void;
		/**
		 * Set the prefix for code block classes.
		 */
		langPrefix?: string | undefined;
		/**
		 * Mangle autolinks (<email@domain.com>).
		 */
		mangle?: boolean | undefined;
		/**
		 * Conform to obscure parts of markdown.pl as much as possible. Don't fix any of the original markdown bugs or poor behavior.
		 */
		pedantic?: boolean | undefined;
		/**
		 * Type: object Default: new Renderer()
		 *
		 * An object containing functions to render tokens to HTML.
		 */
		renderer?: Renderer | RendererObject | undefined;
		/**
		 * Sanitize the output. Ignore any HTML that has been input.
		 */
		sanitize?: boolean | undefined;
		/**
		 * Optionally sanitize found HTML with a sanitizer function.
		 */
		sanitizer?(html: string): string;
		/**
		 * Shows an HTML error message when rendering fails.
		 */
		silent?: boolean | undefined;
		/**
		 * Use smarter list behavior than the original markdown. May eventually be default with the old behavior moved into pedantic.
		 */
		smartLists?: boolean | undefined;
		/**
		 * Use "smart" typograhic punctuation for things like quotes and dashes.
		 */
		smartypants?: boolean | undefined;
		/**
		 * The tokenizer defines how to turn markdown text into tokens.
		 */
		tokenizer?: Tokenizer | TokenizerObject | undefined;
		/**
		 * The walkTokens function gets called with every token.
		 * Child tokens are called before moving on to sibling tokens.
		 * Each token is passed by reference so updates are persisted when passed to the parser.
		 * The return value of the function is ignored.
		 */
		walkTokens?: ((token: Token) => void) | undefined;
		/**
		 * Generate closing slash for self-closing tags (<br/> instead of <br>)
		 */
		xhtml?: boolean | undefined;
	}
	interface MarkedOptions extends Omit<MarkedExtension, "extensions"> {
		/**
		 * Type: object Default: new Renderer()
		 *
		 * An object containing functions to render tokens to HTML.
		 */
		renderer?: Renderer | undefined;
		/**
		 * The tokenizer defines how to turn markdown text into tokens.
		 */
		tokenizer?: Tokenizer | undefined;
	}
}
export declare namespace marked {
	type parse = typeof parse;
}
export declare type m = typeof m;
export interface MarkedExtension {
	/**
	 * A prefix URL for any relative link.
	 */
	baseUrl?: string | undefined;
	/**
	 * Enable GFM line breaks. This option requires the gfm option to be true.
	 */
	breaks?: boolean | undefined;
	/**
	 * Add tokenizers and renderers to marked
	 */
	extensions?: Array<TokenizerExtension | RendererExtension | (TokenizerExtension & RendererExtension)> | undefined;
	/**
	 * Enable GitHub flavored markdown.
	 */
	gfm?: boolean | undefined;
	/**
	 * Include an id attribute when emitting headings.
	 */
	headerIds?: boolean | undefined;
	/**
	 * Set the prefix for header tag ids.
	 */
	headerPrefix?: string | undefined;
	/**
	 * A function to highlight code blocks. The function can either be
	 * synchronous (returning a string) or asynchronous (callback invoked
	 * with an error if any occurred during highlighting and a string
	 * if highlighting was successful)
	 */
	highlight?(code: string, lang: string, callback?: (error: any | undefined, code?: string) => void): string | void;
	/**
	 * Set the prefix for code block classes.
	 */
	langPrefix?: string | undefined;
	/**
	 * Mangle autolinks (<email@domain.com>).
	 */
	mangle?: boolean | undefined;
	/**
	 * Conform to obscure parts of markdown.pl as much as possible. Don't fix any of the original markdown bugs or poor behavior.
	 */
	pedantic?: boolean | undefined;
	/**
	 * Type: object Default: new Renderer()
	 *
	 * An object containing functions to render tokens to HTML.
	 */
	renderer?: Renderer | RendererObject | undefined;
	/**
	 * Sanitize the output. Ignore any HTML that has been input.
	 */
	sanitize?: boolean | undefined;
	/**
	 * Optionally sanitize found HTML with a sanitizer function.
	 */
	sanitizer?(html: string): string;
	/**
	 * Shows an HTML error message when rendering fails.
	 */
	silent?: boolean | undefined;
	/**
	 * Use smarter list behavior than the original markdown. May eventually be default with the old behavior moved into pedantic.
	 */
	smartLists?: boolean | undefined;
	/**
	 * Use "smart" typograhic punctuation for things like quotes and dashes.
	 */
	smartypants?: boolean | undefined;
	/**
	 * The tokenizer defines how to turn markdown text into tokens.
	 */
	tokenizer?: Tokenizer | TokenizerObject | undefined;
	/**
	 * The walkTokens function gets called with every token.
	 * Child tokens are called before moving on to sibling tokens.
	 * Each token is passed by reference so updates are persisted when passed to the parser.
	 * The return value of the function is ignored.
	 */
	walkTokens?: ((token: Token) => void) | undefined;
	/**
	 * Generate closing slash for self-closing tags (<br/> instead of <br>)
	 */
	xhtml?: boolean | undefined;
}
export interface MarkedOptions extends Omit<MarkedExtension, "extensions"> {
	/**
	 * Type: object Default: new Renderer()
	 *
	 * An object containing functions to render tokens to HTML.
	 */
	renderer?: Renderer | undefined;
	/**
	 * The tokenizer defines how to turn markdown text into tokens.
	 */
	tokenizer?: Tokenizer | undefined;
}
export interface RendererExtension {
	name: string;
	renderer: (this: RendererThis, token: Tokens.Generic) => string | false;
}
export interface RendererThis {
	parser: Parser;
}
export interface Rules {
	[ruleName: string]: RegExp | Rules;
}
export interface SluggerOptions {
	dryrun: boolean;
}
export interface TokenizerExtension {
	name: string;
	level: "block" | "inline";
	start?: ((this: TokenizerThis, src: string) => number) | undefined;
	tokenizer: (this: TokenizerThis, src: string, tokens: Token[] | TokensList) => Tokens.Generic | void;
	childTokens?: string[] | undefined;
}
export interface TokenizerThis {
	lexer: Lexer;
}
export namespace Tokens {
	interface Space {
		type: "space";
		raw: string;
	}
	interface Code {
		type: "code";
		raw: string;
		codeBlockStyle?: "indented" | undefined;
		lang?: string | undefined;
		text: string;
	}
	interface Heading {
		type: "heading";
		raw: string;
		depth: number;
		text: string;
		tokens: Token[];
	}
	interface Table {
		type: "table";
		raw: string;
		align: Array<"center" | "left" | "right" | null>;
		header: TableCell[];
		rows: TableCell[][];
	}
	interface TableCell {
		text: string;
		tokens: Token[];
	}
	interface Hr {
		type: "hr";
		raw: string;
	}
	interface Blockquote {
		type: "blockquote";
		raw: string;
		text: string;
		tokens: Token[];
	}
	interface List {
		type: "list";
		raw: string;
		ordered: boolean;
		start: number | "";
		loose: boolean;
		items: ListItem[];
	}
	interface ListItem {
		type: "list_item";
		raw: string;
		task: boolean;
		checked?: boolean | undefined;
		loose: boolean;
		text: string;
		tokens: Token[];
	}
	interface Paragraph {
		type: "paragraph";
		raw: string;
		pre?: boolean | undefined;
		text: string;
		tokens: Token[];
	}
	interface HTML {
		type: "html";
		raw: string;
		pre: boolean;
		text: string;
	}
	interface Text {
		type: "text";
		raw: string;
		text: string;
		tokens?: Token[] | undefined;
	}
	interface Def {
		type: "def";
		raw: string;
		tag: string;
		href: string;
		title: string;
	}
	interface Escape {
		type: "escape";
		raw: string;
		text: string;
	}
	interface Tag {
		type: "text" | "html";
		raw: string;
		inLink: boolean;
		inRawBlock: boolean;
		text: string;
	}
	interface Link {
		type: "link";
		raw: string;
		href: string;
		title: string;
		text: string;
		tokens: Token[];
	}
	interface Image {
		type: "image";
		raw: string;
		href: string;
		title: string;
		text: string;
	}
	interface Strong {
		type: "strong";
		raw: string;
		text: string;
		tokens: Token[];
	}
	interface Em {
		type: "em";
		raw: string;
		text: string;
		tokens: Token[];
	}
	interface Codespan {
		type: "codespan";
		raw: string;
		text: string;
	}
	interface Br {
		type: "br";
		raw: string;
	}
	interface Del {
		type: "del";
		raw: string;
		text: string;
		tokens: Token[];
	}
	interface Generic {
		[index: string]: any;
		type: string;
		raw: string;
		tokens?: Token[] | undefined;
	}
}
export type RendererObject = Partial<Omit<Renderer<false>, "constructor" | "options">>;
export type Token = Tokens.Space | Tokens.Code | Tokens.Heading | Tokens.Table | Tokens.Hr | Tokens.Blockquote | Tokens.List | Tokens.ListItem | Tokens.Paragraph | Tokens.HTML | Tokens.Text | Tokens.Def | Tokens.Escape | Tokens.Tag | Tokens.Image | Tokens.Link | Tokens.Strong | Tokens.Em | Tokens.Codespan | Tokens.Br | Tokens.Del;
export type TokenizerObject = Partial<Omit<Tokenizer<false>, "constructor" | "options">>;
export type TokensList = Token[] & {
	links: {
		[key: string]: {
			href: string | null;
			title: string | null;
		};
	};
};

export {};
