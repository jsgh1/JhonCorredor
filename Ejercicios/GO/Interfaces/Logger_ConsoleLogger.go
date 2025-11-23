package main

import (
	"fmt"
	"strings"
)

type Logger interface {
	Log(msg string)
}

type ConsoleLogger struct {
	Prefix string
}

func NewConsoleLogger() *ConsoleLogger {
	return &ConsoleLogger{Prefix: "[INFO]"}
}

func NewConsoleLoggerPrefix(prefix string) *ConsoleLogger {
	return &ConsoleLogger{Prefix: prefix}
}

func NewConsoleLoggerPrefixUpper(prefix string, upper bool) *ConsoleLogger {
	if upper {
		prefix = strings.ToUpper(prefix)
	}
	return &ConsoleLogger{Prefix: prefix}
}

func NewConsoleLoggerCopy(c *ConsoleLogger) *ConsoleLogger {
	return &ConsoleLogger{Prefix: c.Prefix}
}

func (c *ConsoleLogger) Log(msg string) {
	fmt.Println(c.Prefix, msg)
}
