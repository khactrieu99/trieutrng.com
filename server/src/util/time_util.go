package util

import "time"

const (
	default_format = "2006 Jan, 02"
)

func ConvertTimeToStringFormatted(time time.Time) string {
	return time.Format(default_format)
}
