type Address = { name: string, email: string };
type MaxAddress = [Address, Address?, Address?, Address?, Address?];

// #region Hunter Configuration Typings

type HunterEmailConfig = {
    antiPhishingPhrase?: string
    format: "html" | "plain"
    reportingType: "email"
    address: MaxAddress
}

type HunterLogConfig = {
    logType: "json" | "text"
    reportingType: "log"
    maxFileSize: number
    logDir: string
}

export type HunterConfig = {
    reportingType: "email" | "log"
    includeCodeContext: boolean
    enableSourceMap?: boolean
    quitOnError?: boolean
    cwdFilter?: boolean
    appName: string
} & (HunterEmailConfig | HunterLogConfig)

// #endregion

//#region Template Typings

export type Stack = {
	function: string
	column: number
	file: string
	line: number
}

export type Code = {
	isBuggy: boolean
	lineNo: number
	code: string
}

export type ExceptionTemplate = {
	phishingPhrase?: string
	errorMessage: string
    address: MaxAddress
	stack: Stack[]
	status: string
	app: string
} & ({
	code?: Code[]
	hasCode: true
} | { hasCode: false })

export type RejectionTemplate = {
}

// #endregion

export type RequestData = {
	format: "html" | "plain"
} & ({
	type: "exception"
	data: ExceptionTemplate
} | {
	type: "rejection"
	data: RejectionTemplate
})
