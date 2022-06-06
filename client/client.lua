Citizen.CreateThread(function()
	local player = PlayerPedId()
	while true do
		local coords = GetEntityCoords(player)
		local temp = GetTemperatureAtCoords(coords)
		SendNUIMessage({
			action = "updateTemp",
			temp = temp,
			x = Config.DisplayX,
			y = Config.DisplayY,
			disp = Config.TemperatureTextDisplay,
			text = Config.TemperatureText,
			units = Config.Units,
			shadow = Config.Shadow,
			bgimage = Config.UseBackgroundImage,
			bg = Config.Background,
			bgcolor = Config.BackgroundColor
		})
		Citizen.Wait(Config.UpdateFrequency)
	end
end)