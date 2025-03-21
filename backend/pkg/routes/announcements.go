package routes

import (
	"github.com/enesbuyuk/university-student-club-website/pkg/handlers"
	"github.com/gofiber/fiber/v2"
)

func AnnouncementRoutes(app *fiber.App) {
	app.Get("/announcements", handlers.GetAnnouncements)
	app.Post("/announcements", handlers.PostAnnouncements)
}
