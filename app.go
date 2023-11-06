package main

import (
	"context"
	"fmt"
	"os"

	"github.com/vtech6/goml/lib/network"
)

// App struct
type App struct {
	ctx context.Context
}

// NewApp creates a new App application struct
func NewApp() *App {
	return &App{}
}

// startup is called when the app starts. The context is saved
// so we can call the runtime methods
func (a *App) startup(ctx context.Context) {
	a.ctx = ctx
}

// Greet returns a greeting for the given name
func (a *App) Greet(name string) string {
	return fmt.Sprintf("Hello %s, It's show time!", name)
}
type someJson struct {
	File *os.File `json:"file"`
}
func (a *App) RunNetwork()someJson{
	network.Run()
	jsonFile, err := os.Open("IrisOutput.json")
	// if we os.Open returns an error then handle it
	if err != nil {
		fmt.Println(err)
	}

	// defer the closing of our jsonFile so that we can parse it later on
	defer jsonFile.Close()
	return someJson{File: jsonFile}
}
