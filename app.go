package main

import (
	"context"
	"math/rand"

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

type SavedData struct {
	Data *network.SavedData `json:"savedData"`
}
func (a *App) BinaryCrossentropy()SavedData{
	rand.Seed(42)
	savedData := network.BinaryClassification()
	return SavedData{Data: savedData}
}
func (a *App)Regression()SavedData{
	rand.Seed(42)
	savedData := network.Regression()
	return SavedData{Data: savedData}
}
